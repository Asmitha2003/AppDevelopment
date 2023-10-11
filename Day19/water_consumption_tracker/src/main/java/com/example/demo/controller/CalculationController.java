package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Calculation;
import com.example.demo.service.CalculationService;

@RestController
@CrossOrigin
public class CalculationController {
	@Autowired
	private CalculationService calculationService;
	
	@GetMapping("/getCalculation")
	public List<Calculation> getcaldetails()
	{
		return calculationService.getCalculation();
	}
	
	@PostMapping("/postCalculation")
	public String postcaldetails(@RequestBody Calculation calculation)
	{
		calculationService.postCalculation(calculation);
		return ("Successfully posted");
	}
	
	@PutMapping("/putCalculation/{calculationId}")
	public String putcaldetails(@PathVariable int calculationId,@RequestBody Calculation calculation)
	{
		calculation.setCalculationId(calculationId);
		calculationService.putCalculation(calculation);
		return ("Successfully saved");
	}
	
	@DeleteMapping("/deleteCalxulation/{calculationId}")
	public String getcaldetails(@PathVariable int calculationId)
	{
		calculationService.deleteCalculation(calculationId);
		return ("Successfully deleted");
	}

}
