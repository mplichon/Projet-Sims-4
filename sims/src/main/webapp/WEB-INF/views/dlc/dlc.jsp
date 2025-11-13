<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>DLC | Sims 4 Encyclopédie</title>
	<jsp:include page="../includes/includes.jsp" />
</head>
<body>
    <jsp:include page="../includes/header.jsp" />

	<main>
		<section class="content-section">
			<h2 class="section-title"><div>Gestion des DLC</div><a href="#ajouter-content"><input class="simple-btn" type="submit" value="Ajouter"/></a></h2>

			<table class="tableau-gestion">
				<thead>
					<tr>
						<th>Logo</th>
						<th>Nom</th>
						<th>Date de sortie</th>
						<th>Description</th>
						<th>Type</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${dlcs}" var="dlc">
						<tr>
							<td><img src="${dlc.img}" alt="Logo ${dlc.nom}" class="img-logo"></td>
							<td>${dlc.nom}</td>
							<td>
								<fmt:parseDate value="${dlc.dateSortie}" pattern="yyyy-MM-dd" var="dateSortieFormatee" type="date"/>
								<fmt:formatDate value="${dateSortieFormatee}" pattern="dd/MM/yyyy"/>
							</td>
							<td><div class="description">${dlc.description}</div></td>
							<td>${dlc.type.nom}</td>
							<td>
								<a href="dlc/${dlc.id}"><input type="button" value="Modifier" class="action-btn edit-btn"></a>
								<a href="dlc/delete/${dlc.id}"><input type="button" value="Supprimer" class="action-btn delete-btn"></a>
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</section>

		<section class="content-section" id="ajouter-content">
			<h2 class="section-title">Ajouter un DLC</h2>
			<form:form modelAttribute="dlc" action="dlc" method="POST" class="formulaire-ajout">
				<div class="grid-ajout">
					<form:label path="nom">Nom :</form:label>
					<form:input class="input-classique" path="nom" type="text" placeholder="Saisir le nom" required="required" />

					<form:label path="dateSortie">Date de sortie :</form:label>
					<form:input class="input-date" path="dateSortie" type="date" required="required" />

					<!-- <form:label path="description">Description :</form:label>
					<form:input class="input-classique" path="description" type="text" placeholder="Saisir la description"/> -->

					<form:label path="description">Description :</form:label>
					<form:textarea class="input-classique" path="description" rows="4" placeholder="Saisir la description"></form:textarea>

					<form:label path="img">Image :</form:label>
					<form:input class="input-classique" path="img" type="text" placeholder="Saisir le chemin de l'image"/>

					<form:label path="type">Type :</form:label>
					<div class="input-radio"><form:radiobuttons path="type" items="${types}" required="required" /></div>
				</div>

				<input class="add-btn" type="submit" value="Ajouter">
			</form:form>
		</section>
	</main>

    <jsp:include page="../includes/footer.jsp" />
</body>
</html>