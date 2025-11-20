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
import org.springframework.web.bind.annotation.SessionAttribute;

import jakarta.servlet.http.HttpSession;
import sims.dto.CarriereForm;
import sims.dto.RangCarriereForm;
import sims.model.Carriere;
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
		CarriereForm carriereForm = new CarriereForm();
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
			carriereForm.getRangs().add(new RangCarriereForm());

			for (int j = 1; j<=listeNbExigence.get(i-1); j++) {
				carriereForm.getRangs().get(i-1).getExigencesPourPromotion().add("");
			}
		}

		model.addAttribute("carrieres", carriereSrv.getAll());
		model.addAttribute("carriere", carriereForm);
		model.addAttribute("types", TypeCarriere.values());
		model.addAttribute("dlcs", dlcSrv.getAllOrderByNomAsc());
		return "carriere/carriere";
	}

	@GetMapping("/{id}")
	public String ficheCarriere(@PathVariable Integer id, Model model)
	{
		Carriere carriere = carriereSrv.getById(id);
		model.addAttribute("carriere",carriere);
		model.addAttribute("types", TypeCarriere.values());
		return "carriere/updateCarriere";
	}
	
	@PostMapping
	public String createCarriere(@ModelAttribute("carriere") CarriereForm carrierefForm)
	{
		Carriere carriere = carrierefForm.convertToCarriere();
		carriereSrv.create(carriere);
		return "redirect:/carriere";
	}
	
	@PostMapping("/{id}")
	public String modifierFormateur(@ModelAttribute Carriere carriere)
	{
		carriereSrv.update(carriere);
		return "redirect:/carriere";
	}
	
	@GetMapping("/delete/{id}")
	public String deleteCarriere(@PathVariable Integer id)
	{ 
		carriereSrv.deleteById(id);
		return "redirect:/carriere";
	}

	@PostMapping("/ajouter-rang")
    public String ajouterRang(@SessionAttribute("nbRang") Integer nbRang,
		@SessionAttribute("listeNbExigence") List<Integer> listeNbExigence, Model model, HttpSession session) {

        nbRang++;
        listeNbExigence.add(1);       // nouvel élément initialisé à 1

		session.setAttribute("nbRang", nbRang);
		session.setAttribute("listeNbExigence", listeNbExigence);

        return "redirect:/carriere";
    }

	@PostMapping("/ajouter-exigence")
    public String ajouterExigence(@RequestParam int index, HttpSession session) {
        List<Integer> listeNbExigence = (List<Integer>) session.getAttribute("listeNbExigence");
        
		listeNbExigence.set(index, listeNbExigence.get(index) + 1);

        session.setAttribute("listeNbExigence", listeNbExigence);
        return "redirect:/";
    }

	@PostMapping("/supprimer-rang")
    public String supprimerRang(HttpSession session, Model model) {
		Integer nbRang = (Integer) session.getAttribute("nbRang");
        List<Integer> listeNbExigence = (List<Integer>) session.getAttribute("listeNbExigence");

		if (nbRang != 1) {
			nbRang--;
			listeNbExigence.remove((int) nbRang);

			session.setAttribute("nbRang", nbRang);
			session.setAttribute("listeNbExigence", listeNbExigence);
		}

        return "redirect:/carriere";
    }

	@PostMapping("/supprimer-exigence")
    public String supprimerExigence(@RequestParam int index, HttpSession session) {
        List<Integer> listeNbExigence = (List<Integer>) session.getAttribute("listeNbExigence");

		if (listeNbExigence.get(index) != 1) {
			listeNbExigence.set(index, listeNbExigence.get(index) - 1);

			session.setAttribute("listeNbExigence", listeNbExigence);
		}

        return "redirect:/";
    }
}