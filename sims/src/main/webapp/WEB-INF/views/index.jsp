<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Accueil | Sims 4 Encyclopédie</title>
	<jsp:include page="includes/includes.jsp" />
</head>
<body>
	<jsp:include page="includes/header.jsp" />
    <h1>Bienvenue sur Sims 4 Encyclopédie</h1>

    <p>Tout savoir sur les Sims 4 :</p>
    
    <ul>
    	<li><a href="/dlc">DLC</a></li>
    	<li><a href="/competence">Compétences</a></li>
    	<li><a href="/carriere">Carrières</a></li>
    	<li><a href="/aspiration">Aspirations</a></li>
    	<li><a href="/trait_de_caractere">Traits de caractère</a></li>
    </ul>

	<jsp:include page="includes/footer.jsp" />
</body>
</html>