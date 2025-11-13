package sims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import sims.model.DLC;
import sims.model.TypeDLC;
import sims.service.DlcService;

@Controller
@RequestMapping("/dlc")
public class DlcController {
	
	@Autowired
	DlcService dlcSrv;
	
	@GetMapping
	public String allDlc(Model model) {
		model.addAttribute("dlcs", dlcSrv.getAllOrderByDateSortieAsc());
		model.addAttribute("dlc", new DLC());
		model.addAttribute("types", TypeDLC.values());
		return "dlc/dlc";
	}
	
	@GetMapping("/{id}")
	public String ficheDlc(@PathVariable Integer id, Model model)
	{
		DLC dlc = dlcSrv.getById(id);
		model.addAttribute("dlc",dlc);
		model.addAttribute("types", TypeDLC.values());
		return "dlc/updateDlc";
	}
	
	@PostMapping
	public String createDlc(@ModelAttribute DLC dlc)
	{
		dlcSrv.create(dlc);
		return "redirect:/dlc";
	}
	
	@PostMapping("/{id}")
	public String modifierFormateur(@ModelAttribute DLC dlc)
	{
		dlcSrv.update(dlc);
		return "redirect:/dlc";
	}
	
	@GetMapping("/delete/{id}")
	public String deleteDlc(@PathVariable Integer id)
	{ 
		dlcSrv.deleteById(id);
		return "redirect:/dlc";
	}
}
