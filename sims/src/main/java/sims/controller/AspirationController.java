package sims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import sims.service.AspirationService;

@Controller
@RequestMapping("/aspiration")
public class AspirationController {
	
	@Autowired
	AspirationService aspirationSrv;
	
	@GetMapping
	public String allAspiration(Model model) {
		model.addAttribute("aspirations", aspirationSrv.getAll());
		return "aspiration/aspiration";
	}
}