package com.devsuperior.dsvendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SeleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;


@Service
public class SaleService {

	@Autowired
	private SeleRepository repository;
	
	@Autowired
	private  SellerRepository sallerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findALL(Pageable pageable) {
		sallerRepository.findAll();
		Page<Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
	
}
