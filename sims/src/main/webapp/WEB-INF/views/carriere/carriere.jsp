<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Carrières | Sims 4 Encyclopédie</title>
	<jsp:include page="../includes/includes.jsp" />
</head>
<body>
    <jsp:include page="../includes/header.jsp" />

	<main>
		<section class="content-section">
			<h2 class="section-title"><div>Gestion des carrières</div><a href="#ajouter-content"><input class="simple-btn" type="submit" value="Ajouter"/></a></h2>

			<table class="tableau-gestion">
				<thead>
					<tr>
						<th>Logo</th>
						<th>Nom</th>
						<th>Description</th>
						<th>Carrière générale</th>
						<th>Type</th>
						<th>DLC</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${carrieres}" var="c">
						<tr>
							<td><img src="${c.img}" alt="Logo ${c.nom}" class="img-logo"></td>
							<td>${c.nom}</td>
							<td><div class="description">${c.description}</div></td>
							<c:choose>
								<c:when test="${carriere.nomCarriereGenerale == null}"><td>N/A</td></c:when>
								<c:otherwise><td>${c.nomCarriereGenerale}</td></c:otherwise>
							</c:choose>
							<td>${c.type.nom}</td>
							<td><img src="${c.dlc.img}" alt="Logo ${c.dlc.nom}" title="${c.dlc.nom}" class="img-logo"></td>
							<td class="colonne-btn">
								<a href="carriere/${c.id}"><input type="button" value="Modifier" class="action-btn edit-btn"></a>
								<a href="carriere/delete/${c.id}"><input type="button" value="Supprimer" class="action-btn delete-btn"></a>
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</section>

		<section class="content-section" id="ajouter-content">
			<h2 class="section-title">Ajouter une compétence</h2>
			<form:form modelAttribute="carriere" action="carriere" method="POST" class="formulaire-ajout">
				<div class="grid-ajout">
					<form:label path="nom">Nom :</form:label>
					<form:input class="input-classique" path="nom" type="text" placeholder="Saisir le nom" required="required" />

					<form:label path="description">Description :</form:label>
					<form:textarea class="input-classique" path="description" rows="4" placeholder="Saisir la description"></form:textarea>

					<form:label path="nomCarriereGenerale">Carrière générale :</form:label>
					<form:input class="input-classique" path="nomCarriereGenerale" type="text" placeholder="Saisir le nom de la carrière générale" required="required" />

					<form:label path="img">Image :</form:label>
					<form:input class="input-classique" path="img" type="text" placeholder="Saisir le chemin de l'image"/>

					<form:label path="type">Type :</form:label>
					<div class="input-radio"><form:radiobuttons path="type" items="${types}" required="required" /></div>
					
					<form:label path="dlc">DLC :</form:label>
					<form:select required="required" path="dlc.id">
						<form:option value="">Choisir un DLC</form:option>
						<form:options items="${dlcs}" itemValue="id" itemLabel="nom"/>
					</form:select>
				</div>

				<h3>Rangs</h3>
				<div class="grid-ajout">
					<c:forEach items="${carriere.rangs}" var="rang" varStatus="i">
						<h4>Rang ${i.index + 1} :</h4><br>
						<input type="hidden" name="rangs[${i.index}].numero" value="${i.index + 1}"/>
						<form:label path="rangs[${i.index}].titre">Nom :</form:label>
						<form:input path="rangs[${i.index}].titre" type="text" placeholder="Saisir le titre du rang" required="required" class="input-classique"/>

						<form:label path="rangs[${i.index}].salaire">Salaire :</form:label>
						<form:input class="input-classique" path="rangs[${i.index}].salaire" type="number" placeholder="Saisir le salaire du rang" required="required"/>
					
						<form:label path="rangs[${i.index}].tacheDuJour">Tâche du jour :</form:label>
						<form:input path="rangs[${i.index}].tacheDuJour" type="text" placeholder="Saisir la tâche du jour du rang" required="required" class="input-classique"/>

						<c:forEach items="${rang.exigencesPourPromotion}" var="exigence" varStatus="j">
							<label><c:if test="${j.first}">Exigences :</c:if></label>
							<form:input path="rangs[${i.index}].exigencesPourPromotion[${j.index}]" type="text" placeholder="Saisir une exigence pour la promotion" required="required" class="input-classique"/>
						</c:forEach>
						<!-- boutons ajouter/supprimer exigence -->
						<div></div>
						<div class="line-small-btn">
							<button class="edit-btn small-btn" type="button" onclick="ajouterExigence(${i.index})">+</button>
							<button class="delete-btn small-btn" type="button" onclick="supprimerExigence(${i.index})">-</button>
						</div>
					</c:forEach>
				</div>

				<!-- boutons ajouter/supprimer rang -->
				 <div class="line-btn">
					<button class="action-btn edit-btn" type="button" onclick="ajouterRang()">Ajouter un rang</button>
					<button class="action-btn delete-btn" type="button" onclick="supprimerRang()">Supprimer un rang</button>
				 </div>

				<input class="add-btn" type="submit" value="Ajouter">
			</form:form>
		</section>
	</main>
	
    <jsp:include page="../includes/footer.jsp" />

	
<script>
	function post(url, data) {
		const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

		const body = new URLSearchParams(data).toString();
		return fetch(url, {
			method: 'POST',
			headers,
			body
		});
	}

	function ajouterRang() {
		post('carriere/ajouter-rang', {})     // pas de données nécessaires
			.then(r => { window.location.href = '/carriere'; })
			.catch(e => { console.error(e); alert('Erreur en ajoutant un rang'); });
	}

	function ajouterExigence(index) {
		post('carriere/ajouter-exigence', { index: index })
			.then(r => { window.location.href = '/carriere'; })
			.catch(e => { console.error(e); alert('Erreur en ajoutant une exigence'); });
	}

	function supprimerRang() {
		post('carriere/supprimer-rang', {})     // pas de données nécessaires
			.then(r => { window.location.href = '/carriere'; })
			.catch(e => { console.error(e); alert('Erreur en ajoutant un rang'); });
	}

	function supprimerExigence(index) {
		post('carriere/supprimer-exigence', { index: index })
			.then(r => { window.location.href = '/carriere'; })
			.catch(e => { console.error(e); alert('Erreur en ajoutant une exigence'); });
	}
</script>
</body>
</html>