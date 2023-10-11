package com.example.demo.entity;

import com.example.demo.entity.enumerate.Activitylevel;
import com.example.demo.entity.enumerate.Climate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="calculationtable")
public class Calculation
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int calculationId;
	private int age;
	private double weight;
	
	@Enumerated(EnumType.STRING)
	private Activitylevel activityLevel;
	
	@Enumerated(EnumType.STRING)
	private Climate climate;
}