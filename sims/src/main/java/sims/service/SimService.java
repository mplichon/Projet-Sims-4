package sims.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import sims.model.CategorieSim;

@Service
public class SimService {
    
    public List<CategorieSim> getAllCategorieSim() {
		return Arrays.asList(CategorieSim.values());
	}
}
