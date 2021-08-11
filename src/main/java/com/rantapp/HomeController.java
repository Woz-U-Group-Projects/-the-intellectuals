package com.rantapp;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.rantapp.Message;
import com.rantapp.MessageRepository;
import com.rantapp.MySQLUserDetailsService;
import com.rantapp.User;
import com.rantapp.UserRepository;

public class HomeController {
	// Test Comment

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MessageRepository messageRepository;
		
	@Autowired
	private MySQLUserDetailsService userService;
	
	@GetMapping("/")
	public String getHomePage() {
		return "home";
	}

	@GetMapping("/secure")
	public String getSecurePage() {
		return "secure";
	}

	@GetMapping("/login")
	public String getLoginPage() {
		return "login";
	}

	@GetMapping("/register")
	public String getRegisterPage() {
		System.out.println("Test");
		return "register";
	}
	
	@GetMapping("/message")
	  public String getMessagesPage(Model model) {
	    List<Message> foundMessages = messageRepository.findAll();
	    System.out.println(foundMessages.toString());
	    model.addAttribute("messages", foundMessages);
	    return "messages";
	  }
	
	@GetMapping("/message/{id}")
    public ResponseEntity<Message> getMessage(@RequestParam Long id) {
        Message foundMessage = messageRepository.findById(id).orElse(null);
        if(foundMessage == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(foundMessage);
    }
	
	@PostMapping("/post")
	  public String createMessage(@RequestParam("message") String message, Model model) {
	    Message newMessage = new Message();
	    newMessage.setMessage(message);
	    messageRepository.save(newMessage);

	    List<Message> foundMessage = messageRepository.findAll();
	    model.addAttribute("messages", foundMessage);
	    return "messages";
	  }


	
	@PostMapping("/register")
	public String createUser(@RequestParam("username") String username, @RequestParam("password") String password, Model model) {
		User foundUser = userRepository.findByUsername(username);
		if (foundUser == null) {
			User newUser = new User();
			newUser.setUsername(username);
			newUser.setPassword(password);
			userService.Save(newUser);
			System.out.println("Test message");
			return "register";
		}
		else {
			model.addAttribute("exists", true);
			return "login";
		}
	}
}
