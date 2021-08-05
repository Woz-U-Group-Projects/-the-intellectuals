package com.rantapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	  private MySQLUserDetailsService userService;

	@Autowired
	  private UserRepository userRepository;

	  @PostMapping("/signup")
	  public void signup(@RequestBody User newUser) {
		System.out.println("Test");
	    userService.Save(newUser);
	  }
	  
	  @GetMapping("/fetch")
	  public List<User> fetch() {
		  System.out.println("Test");
		  return userService.getUsers();
	  }
	  
	  @DeleteMapping("/delete/{id}")
	  public ResponseEntity<User> deleteUser(@RequestParam Long id){
		  User foundUser = userRepository.findById(id).orElse(null);
		  if(foundUser == null) {
			  return ResponseEntity.notFound().header("No user with that Id").build();
		  }
		  userRepository.delete(foundUser);
		  return ResponseEntity.ok(foundUser);
	  }
	}	  
