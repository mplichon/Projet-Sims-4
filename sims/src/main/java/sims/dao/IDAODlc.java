package sims.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sims.model.DLC;
import sims.model.TypeDLC;

public interface IDAODlc extends JpaRepository<DLC, Integer>{

	public List<DLC> findAllByType(TypeDLC type);
}
