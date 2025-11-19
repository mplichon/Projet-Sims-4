<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${competence.nom} | Sims 4 Encyclopédie</title>
	<jsp:include page="../includes/includes.jsp" />
</head>
<body>
    <jsp:include page="../includes/header.jsp" />

	<main>
		<section class="content-section">
			<h2 class="section-title">Modifier une compétence</h2>
			<form:form modelAttribute="competence" action="/competence/${competence.id}" method="POST" class="formulaire-ajout">
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

				<input class="add-btn" type="submit" value="Modifier">
			</form:form>
		</section>
    </main>

    <jsp:include page="../includes/footer.jsp" />
</body>
</html>