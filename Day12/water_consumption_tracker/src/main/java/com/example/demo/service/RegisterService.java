package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Register;
import com.example.demo.repository.RegisterRepository;

@Service
public class RegisterService {
	
	@Autowired
	private RegisterRepository registerRepository;
	
	public List<Register> getRegister(){
		return registerRepository.findAll();
	}
	
	public Optional<Register> getRegisterbyId(int id){
		return registerRepository.findById(id);
	}
	
	public void postRegister(Register r) {
	    registerRepository.save(r);
	}
	
	public Register putRegister(Register r) {
		return registerRepository.save(r);
	}
	
	public void deleteRegister(int id) {
		registerRepository.deleteById(id);
	}

}
