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

import com.example.demo.entity.Register;
import com.example.demo.service.RegisterService;


@RestController
@CrossOrigin
public class RegisterController {
  @Autowired
  private RegisterService registerService;
  
  @GetMapping("/getRegister")
  public List<Register> getRegister(){
	  return registerService.getRegister();
  }
  
  @GetMapping("/getRegister/{id}")
  public Optional<Register> getRegisterbyId(@PathVariable int id){
	  return registerService.getRegisterbyId(id);
  }
  
  @PostMapping("/postRegister")
  public String postRegister(@RequestBody Register r) {
	  registerService.postRegister(r);
	  return ("Successfully saved");
  }
  
  @PutMapping("/putRegister/{id}")
  public String putRegister(@PathVariable int id,@RequestBody Register r) {
	  r.setId(id);
	  registerService.putRegister(r);
	  return ("Successfully saved");
  }
  
  @DeleteMapping("/deleteRegister/{id}")
  public String deleteRegister(@PathVariable int id) {
	  registerService.deleteRegister(id);
	  return ("Successfully deleted");
  }
}
