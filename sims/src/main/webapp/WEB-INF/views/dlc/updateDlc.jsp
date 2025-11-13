<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${dlc.nom} | Sims 4 Encyclopédie</title>
	<jsp:include page="../includes/includes.jsp" />
</head>
<body>
    <jsp:include page="../includes/header.jsp" />

	<main>
		<section class="content-section">
			<h2 class="section-title">Modifier un DLC</h2>
			<form:form modelAttribute="dlc" action="/dlc/${dlc.id}" method="POST" class="formulaire-ajout">
				<div class="grid-ajout">
					<form:label path="nom">Nom :</form:label>
					<form:input class="input-classique" path="nom" type="text" placeholder="Saisir le nom" required="required" />

					<form:label path="dateSortie">Date de sortie :</form:label>
					<form:input class="input-date" path="dateSortie" type="date" required="required" />

					<form:label path="description">Description :</form:label>
					<form:textarea class="input-classique" path="description" rows="4" placeholder="Saisir la description"></form:textarea>

					<form:label path="img">Image :</form:label>
					<form:input class="input-classique" path="img" type="text" placeholder="Saisir le chemin de l'image"/>

					<form:label path="type">Type :</form:label>
					<div class="input-radio"><form:radiobuttons path="type" items="${types}" required="required" /></div>
				</div>

				<input class="add-btn" type="submit" value="Modifier">
			</form:form>
		</section>
    </main>

    <jsp:include page="../includes/footer.jsp" />
</body>
</html>