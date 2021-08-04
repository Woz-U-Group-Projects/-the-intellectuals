package com.rantapp;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long>{
	User findByUsername(String username);
}
//Ignore errors for now, once a model is created, they will clear up