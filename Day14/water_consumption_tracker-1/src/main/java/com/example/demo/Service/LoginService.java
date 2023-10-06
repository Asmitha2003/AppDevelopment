package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Entity.Login;
import com.example.demo.Repository.LoginRepository;


public class LoginService 
{
	@Autowired
	private LoginRepository userrepo;
	public List<Login> getUser() 
	   {
		  return userrepo.findAll();
	   }
	public void saveUser(Login le)
	   {
		  userrepo.save(le);
	   }

}
