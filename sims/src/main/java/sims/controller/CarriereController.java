package sims.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;
import sims.model.Carriere;
import sims.model.RangCarriere;
import sims.model.TypeCarriere;
import sims.service.CarriereService;
import sims.service.DlcService;

@Controller
@RequestMapping("/carriere")
public class CarriereController {
	
	@Autowired
	CarriereService carriereSrv;

	@Autowired
	DlcService dlcSrv;

	@GetMapping
	public String allCarriere(HttpSession session, Model model) {
		Carriere carriere = new Carriere();
		Integer nbRang = (Integer) session.getAttribute("nbRang");
        List<Integer> listeNbExigence = (List<Integer>) session.getAttribute("listeNbExigence");

		if (nbRang == null) {
            nbRang = 1;
            session.setAttribute("nbRang", nbRang);
        }
        if (listeNbExigence == null) {
            listeNbExigence = new ArrayList<Integer>();
			listeNbExigence.add(1);
            session.setAttribute("listeNbExigence", listeNbExigence);
        }

		for (int i = 1; i<=nbRang; i++) {
			carriere.getRangs().add(new RangCarriere());

			for (int j = 1; j<=listeNbExigence.get(i-1); j++) {
				carriere.getRangs().get(i-1).getExigencesPourPromotion().add("");
			}
		}

		model.addAttribute("carrieres", carriereSrv.getAll());
		model.addAttribute("carriere", carriere);
		model.addAttribute("types", TypeCarriere.values());
		model.addAttribute("dlcs", dlcSrv.getAllOrderByNomAsc());
		return "carriere/carriere";
	}

	@GetMapping("/{id}")
	public String ficheCarriere(@PathVariable Integer id, Model model) {
		Carriere carriere = carriereSrv.getById(id);

		model.addAttribute("carriere", carriere);
		model.addAttribute("types", TypeCarriere.values());
		model.addAttribute("dlcs", dlcSrv.getAllOrderByNomAsc());
		return "carriere/updateCarriere";
	}
	
	@PostMapping
	public String createCarriere(@ModelAttribute Carriere carriere, HttpSession session) {
		carriereSrv.create(carriere);
		
		session.setAttribute("nbRang", 1);
		List<Integer> listeNbExigence = new ArrayList<Integer>();
		listeNbExigence.add(1);

		return "redirect:/carriere";
	}
	
	@PostMapping("/{id}")
	public String modifierFormateur(@ModelAttribute Carriere carriere, HttpSession session) {
		carriereSrv.update(carriere);

		session.setAttribute("nbRang", 1);
		List<Integer> listeNbExigence = new ArrayList<Integer>();
		listeNbExigence.add(1);
		session.setAttribute("listeNbExigence", listeNbExigence);

		return "redirect:/carriere";
	}
	
	@GetMapping("/delete/{id}")
	public String deleteCarriere(@PathVariable Integer id) { 
		carriereSrv.deleteById(id);
		return "redirect:/carriere";
	}


	// Ajout et suppression de rang et d'exigence
	@PostMapping("/ajouter-rang")
    public String ajouterRang(HttpSession session) {
		Integer nbRang = (Integer) session.getAttribute("nbRang");
        List<Integer> listeNbExigence = (List<Integer>) session.getAttribute("listeNbExigence");

        nbRang++;
        listeNbExigence.add(1);       // nouvel élément initialisé à 1

		session.setAttribute("nbRang", nbRang);
		session.setAttribute("listeNbExigence", listeNbExigence);

        return "redirect:/carriere";
    }

	@PostMapping("/ajouter-rang/{id}")
    public String ajouterRangUpdate(@PathVariable Integer id) {
		Carriere carriere = carriereSrv.getById(id);
		int nbRang = carriere.getRangs().size();

		RangCarriere rang = new RangCarriere(nbRang +1, "", 0, "");
		rang.getExigencesPourPromotion().add(""); // on ajoute une exigence au nouveau rang
		carriere.getRangs().add(rang); // on ajoute le nouveau rang

		carriereSrv.update(carriere);
		
        return "redirect:/carriere/" + id;
    }

	@PostMapping("/ajouter-exigence")
    public String ajouterExigence(@RequestParam int index, HttpSession session) {
        List<Integer> listeNbExigence = (List<Integer>) session.getAttribute("listeNbExigence");
        
		listeNbExigence.set(index, listeNbExigence.get(index) + 1);

        session.setAttribute("listeNbExigence", listeNbExigence);
        return "redirect:/carriere";
    }

	@PostMapping("/ajouter-exigence/{id}")
    public String ajouterExigenceUpdate(@PathVariable Integer id, @RequestParam int index) {
		Carriere carriere = carriereSrv.getById(id);
		
		carriere.getRangs().get(index).getExigencesPourPromotion().add(""); // on ajoute une nouvelle exigence

		carriereSrv.update(carriere);

        return "redirect:/carriere/" + id;
    }

	@PostMapping("/supprimer-rang")
    public String supprimerRang(HttpSession session) {
		Integer nbRang = (Integer) session.getAttribute("nbRang");
        List<Integer> listeNbExigence = (List<Integer>) session.getAttribute("listeNbExigence");

		if (nbRang > 1) {
			nbRang--;
			listeNbExigence.remove((int) nbRang);

			session.setAttribute("nbRang", nbRang);
			session.setAttribute("listeNbExigence", listeNbExigence);
		}

        return "redirect:/carriere";
    }

	@PostMapping("/supprimer-rang/{id}")
    public String supprimerRangUpdate(@PathVariable Integer id) {
		Carriere carriere = carriereSrv.getById(id);
		
		int nbRang = carriere.getRangs().size();
		if (nbRang > 1) {
			carriere.getRangs().remove(nbRang-1);
		}

		carriereSrv.update(carriere);

        return "redirect:/carriere/" + id;
    }

	@PostMapping("/supprimer-exigence")
    public String supprimerExigence(@RequestParam int index, HttpSession session) {
        List<Integer> listeNbExigence = (List<Integer>) session.getAttribute("listeNbExigence");

		if (listeNbExigence.get(index) > 1) {
			listeNbExigence.set(index, listeNbExigence.get(index) - 1);

			session.setAttribute("listeNbExigence", listeNbExigence);
		}

        return "redirect:/carriere";
    }

	@PostMapping("/supprimer-exigence/{id}")
    public String supprimerExigenceUpdate(@PathVariable Integer id, @RequestParam int index) {
        Carriere carriere = carriereSrv.getById(id);

		int nbExigence = carriere.getRangs().get(index).getExigencesPourPromotion().size();
		if (nbExigence > 1) {
			carriere.getRangs().get(index).getExigencesPourPromotion().remove(nbExigence-1); // on supprime la dernière exigence du rang ciblé
		}

		carriereSrv.update(carriere);
		
        return "redirect:/carriere/" + id;
    }

	@PostMapping("/update-variables/{id}")
    public String reinitialiserVariablesAvantUpdate(@PathVariable Integer id, HttpSession session) {
		Carriere carriere = carriereSrv.getById(id);

		int nbRang = carriere.getRangs().size();
		List<Integer> listeNbExigence = new ArrayList<Integer>();
		for (RangCarriere r : carriere.getRangs()) {
			listeNbExigence.add(r.getExigencesPourPromotion().size());
		}

		session.setAttribute("nbRang", nbRang);
		session.setAttribute("listeNbExigence", listeNbExigence);

        return "redirect:/carriere/" + id;
    }
}