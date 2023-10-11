package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.NewLogin;
import com.example.demo.repository.LoginRepository;

@Service
public class LoginService 
{
	@Autowired
	private LoginRepository userrepo;

	public List<NewLogin> getLogin() {
		return userrepo.findAll();
	}
	

}
