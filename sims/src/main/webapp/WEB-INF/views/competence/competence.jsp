<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Compétences | Sims 4 Encyclopédie</title>
	<jsp:include page="../includes/includes.jsp" />
</head>
<body>
    <jsp:include page="../includes/header.jsp" />

	<main>
		<section class="content-section">
			<h2 class="section-title"><div>Gestion des compétences</div><a href="#ajouter-content"><input class="simple-btn" type="submit" value="Ajouter"/></a></h2>

			<table class="tableau-gestion">
				<thead>
					<tr>
						<th>Logo</th>
						<th>Nom</th>
						<th>Description</th>
						<th>Niveaux</th>
						<th>Catégorie</th>
						<th>DLC</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${competences}" var="competence">
						<tr>
							<td><img src="${competence.img}" alt="Logo ${competence.nom}" class="img-logo"></td>
							<td>${competence.nom}</td>
							<td><div class="description">${competence.description}</div></td>
							<td>${competence.niveauMax}</td>
							<td>
								<c:set var="categorieFormattee" value="${competence.categorieSim.name()}" />
								${fn:toUpperCase(fn:substring(categorieFormattee, 0, 1))}${fn:toLowerCase(fn:substring(categorieFormattee, 1, fn:length(categorieFormattee)))}
							</td>
							<td><img src="${competence.dlc.img}" alt="Logo ${competence.dlc.nom}" title="${competence.dlc.nom}" class="img-logo"></td>
							<td class="colonne-btn">
								<a href="competence/${competence.id}"><input type="button" value="Modifier" class="action-btn edit-btn"></a>
								<a href="competence/delete/${competence.id}"><input type="button" value="Supprimer" class="action-btn delete-btn"></a>
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</section>

		<section class="content-section" id="ajouter-content">
			<h2 class="section-title">Ajouter une compétence</h2>
			<form:form modelAttribute="competence" action="competence" method="POST" class="formulaire-ajout">
				<div class="grid-ajout">
					<form:label path="nom">Nom :</form:label>
					<form:input class="input-classique" path="nom" type="text" placeholder="Saisir le nom" required="required" />

					<form:label path="description">Description :</form:label>
					<form:textarea class="input-classique" path="description" rows="4" placeholder="Saisir la description"></form:textarea>

					<form:label path="niveauMax">Niveau max :</form:label>
					<form:input class="input-classique" path="niveauMax" type="number" placeholder="Saisir le niveau max" required="required" />

					<form:label path="img">Image :</form:label>
					<form:input class="input-classique" path="img" type="text" placeholder="Saisir le chemin de l'image"/>

					<form:label path="categorieSim">Catégorie de Sim :</form:label>
					<div class="input-radio"><form:radiobuttons path="categorieSim" items="${categoriesSim}" required="required" /></div>
					
					<form:label path="dlc">DLC :</form:label>
					<form:select required="required" path="dlc.id">
						<form:option value="">Choisir un DLC</form:option>
						<form:options items="${dlcs}" itemValue="id" itemLabel="nom"/>
					</form:select>
				</div>

				<input class="add-btn" type="submit" value="Ajouter">
			</form:form>
		</section>
	</main>
	
    <jsp:include page="../includes/footer.jsp" />
</body>
</html>