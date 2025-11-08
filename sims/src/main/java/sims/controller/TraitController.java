package sims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import sims.service.TraitDeCaractereService;

@Controller
@RequestMapping("/trait_de_caractere")
public class TraitController {

	@Autowired
	TraitDeCaractereService traitSrv;
	
	@GetMapping
	public String allTrait(Model model) {
		model.addAttribute("traits", traitSrv.getAll());
		return "trait/trait";
	}
}
