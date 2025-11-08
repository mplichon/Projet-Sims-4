package sims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import sims.service.CompetenceService;

@Controller
@RequestMapping("/competence")
public class CompetenceController {
	
	@Autowired
	CompetenceService competenceSrv;
	
	@GetMapping
	public String allCompetence(Model model) {
		model.addAttribute("competences", competenceSrv.getAll());
		return "competence/competence";
	}
}