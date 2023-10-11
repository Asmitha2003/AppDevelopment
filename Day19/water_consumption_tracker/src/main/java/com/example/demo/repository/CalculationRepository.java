package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Calculation;

	@Repository
	public interface CalculationRepository extends JpaRepository<Calculation, Integer> {

		

	}

