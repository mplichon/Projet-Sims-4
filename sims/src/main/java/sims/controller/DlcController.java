package sims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import sims.service.DlcService;

@Controller
@RequestMapping("/dlc")
public class DlcController {
	
	@Autowired
	DlcService dlcSrv;
	
	@GetMapping
	public String allDlc(Model model) {
		model.addAttribute("dlcs", dlcSrv.getAll());
		return "dlc/dlc";
	}
}
