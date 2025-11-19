package sims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import sims.model.CategorieSim;
import sims.model.Competence;
import sims.service.CompetenceService;
import sims.service.DlcService;

@Controller
@RequestMapping("/competence")
public class CompetenceController {
	
	@Autowired
	CompetenceService competenceSrv;
	
	@Autowired
	DlcService dlcSrv;
	
	@GetMapping
	public String allCompetence(Model model) {
		model.addAttribute("competences", competenceSrv.getAllOrderByNomAsc());
		model.addAttribute("competence", new Competence());
		model.addAttribute("categoriesSim", CategorieSim.values());
		model.addAttribute("dlcs", dlcSrv.getAllOrderByNomAsc());
		return "competence/competence";
	}
	
	@GetMapping("/{id}")
	public String ficheCompetence(@PathVariable Integer id, Model model)
	{
		model.addAttribute("competence", competenceSrv.getById(id));
		model.addAttribute("categoriesSim", CategorieSim.values());
		model.addAttribute("dlcs", dlcSrv.getAllOrderByNomAsc());
		return "competence/updateCompetence";
	}
	
	@PostMapping
	public String createCompetence(@ModelAttribute Competence competence)
	{
		competenceSrv.create(competence);
		return "redirect:/competence";
	}
	
	@PostMapping("/{id}")
	public String modifierFormateur(@ModelAttribute Competence competence)
	{
		competenceSrv.update(competence);
		return "redirect:/competence";
	}
	
	@GetMapping("/delete/{id}")
	public String deleteCompetence(@PathVariable Integer id)
	{ 
		competenceSrv.deleteById(id);
		return "redirect:/competence";
	}
}