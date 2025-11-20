package sims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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
	public String allCarriere(Model model) {
		CarriereForm carriereForm = new CarriereForm();
		carriereForm.getRangs().add(new RangCarriereForm());
		carriereForm.getRangs().get(0).getExigencesPourPromotion().add("");

		carriereForm.getRangs().add(new RangCarriereForm());
		carriereForm.getRangs().get(1).getExigencesPourPromotion().add("");
		carriereForm.getRangs().get(1).getExigencesPourPromotion().add("");

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
}