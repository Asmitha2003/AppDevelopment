package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Login;
import com.example.demo.service.LoginService;

@RestController
@CrossOrigin
public class LoginController {
	@Autowired
	private LoginService loginService;
	
	
	@GetMapping("/getLogin")
	public List<Login> getUserLogin(){
		return loginService.getLogin();
	}
	@GetMapping("/getLogin/{id}")
	public Optional<Login> getUserLoginbyId(@PathVariable int id){
		return loginService.getLoginbyId(id);
	}

	@PostMapping("/postLogin")
	public String postUserLogin(@RequestBody Login l)
	{
		loginService.postLogin(l);
		return ("Successfully saved");
	}
	
	@PutMapping("/putLogin/{id}")
	public String putUserLogin(@PathVariable int id,@RequestBody Login l)
	{
		 l.setId(id);
		 loginService.putLogin(l);
		 return ("Successfully saved");
	}
	
	@DeleteMapping("/deleteLogin/{id}")
	public String deleteUserLogin(@PathVariable int id)
	{
		 loginService.deleteLogin(id);	
		 return ("Successfully deleted");
	}

}
