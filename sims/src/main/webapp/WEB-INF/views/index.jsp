<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Accueil | Sims 4 Encyclopédie</title>
	<jsp:include page="includes/includes.jsp" />
	<link rel="stylesheet" href="css/index.css">
</head>
<body>
	<jsp:include page="includes/header.jsp" />

	<main>
    <section class="hero">
		<h2>Bienvenue dans le monde des Sims 4 !</h2>
		<p>Explorez toutes les facettes du jeu et connectez-vous pour indiquer vos DLC.</p>
	</section>
    
	<section class="content-section">
		<h2 class="section-title">Découvre les sections du site</h2>

		<div class="cards">
			<a href="/dlc">
				<div class="card">
					<h3>DLC</h3>
					<p>Tout sur les DLC du monde des Sims 4. Connectez-vous pour indiquer ceux que vous possédez.</p>
				</div>
			</a>

			<a href="/competence">
				<div class="card">
					<h3>Compétences</h3>
					<p>Apprenez à maîtriser toutes les compétences de vos Sims pour débloquer de nouvelles possibilités.</p>
				</div>
			</a>

			<a href="/carriere">
				<div class="card">
					<h3>Carrières</h3>
					<p>Découvrez toutes les professions possibles pour vos Sims et comment les faire évoluer.</p>
				</div>
			</a>

			<a href="/aspiration">
				<div class="card">
					<h3>Aspirations</h3>
					<p>Guide complet des aspirations et des récompenses associées à chaque parcours de vie.</p>
				</div>
			</a>

			<a href="/trait_de_caractere">
				<div class="card">
					<h3>Traits de caractère</h3>
					<p>Découvrez les traits qui façonnent la personnalité unique de chaque Sim.</p>
				</div>
			</a>
		</div>
	</section>
	</main>

	<jsp:include page="includes/footer.jsp" />
</body>
</html>