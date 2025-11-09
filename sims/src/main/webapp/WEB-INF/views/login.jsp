<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Connexion | Sims 4 Encyclopédie</title>
	<jsp:include page="includes/includes.jsp" />
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
	<jsp:include page="includes/header.jsp" />

    <main>
    <form method="POST" action="login" class="login-section">
        <h3>Connexion</h3>
        <p>Connectez-vous pour enregistrer les DLC que vous possédez :</p>

        <input type="text" placeholder="Nom d'utilisateur">
        <input type="password" placeholder="Mot de passe">

        <button>Se connecter</button>
    </form>
    </main>

	<jsp:include page="includes/footer.jsp" />
</body>
</html>