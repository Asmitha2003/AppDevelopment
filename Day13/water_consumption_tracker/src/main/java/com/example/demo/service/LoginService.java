package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;
import com.example.demo.repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	private LoginRepository loginRepository;
	
	public List<Login> getLogin(){
		return loginRepository.findAll();
	}
	
	public Optional<Login> getLoginbyId(int id){
		return loginRepository.findById(id);
	}
	
	public void postLogin(Login l) {
		loginRepository.save(l);
	}
	
	public Login putLogin(Login l) {
		return loginRepository.save(l);
	}
	
	public void deleteLogin(int id) {
		loginRepository.deleteById(id);
	}
}
