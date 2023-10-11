package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Calculation;
import com.example.demo.repository.CalculationRepository;

@Service
public class CalculationService {
	@Autowired
	private CalculationRepository calculationRepository;
	
	public List<Calculation> getCalculation()
	{
		return calculationRepository.findAll();
	}
	
	public void postCalculation(Calculation calculation)
	{
		calculationRepository.save(calculation);
	}	
	public void putCalculation(Calculation calculation)
	{
		calculationRepository.save(calculation);
	}
	
	public void deleteCalculation(int calculationId)
	{
		calculationRepository.deleteById(calculationId);
	}
}
