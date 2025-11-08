package sims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import sims.service.CarriereService;

@Controller
@RequestMapping("/carriere")
public class CarriereController {
	
	@Autowired
	CarriereService carriereSrv;
	
	@GetMapping
	public String allCarriere(Model model) {
		model.addAttribute("carrieres", carriereSrv.getAll());
		return "carriere/carriere";
	}
}