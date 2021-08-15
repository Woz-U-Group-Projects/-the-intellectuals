package com.rantapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/message")
public class MessageController {
	@Autowired
	MessageRepository messageRepository;
	
	@GetMapping("/fetch")
	public ResponseEntity<List<Message>> getPosts() {
		List<Message> results = messageRepository.findAll();
		return ResponseEntity.ok(results);
	}
	
	@PostMapping("/post")
	public ResponseEntity<Message> addMessage(@RequestBody Message message, Model model) {
	    Message newMessage = messageRepository.save(message);
	    return ResponseEntity.ok(newMessage);
	}
	
	@DeleteMapping("/{id}")
	 public ResponseEntity<Message> removeMessage(@PathVariable(value="id") Long id) {
	    Message foundMessage = messageRepository.findById(id).orElse(null);
	      if(foundMessage == null) {
	          return ResponseEntity.notFound().header("Message","Nothing found with that id").build();
	        }
	      else {
	     messageRepository.delete(foundMessage);
	     }
	     return ResponseEntity.ok(foundMessage);
	    }
	/*@PostMapping("/post")
	  public String createMessage(@RequestParam String message, Model model) {
		System.out.println("Test");
	    Message newMessage = new Message();
	    newMessage.setMessage(message);
	    messageRepository.save(newMessage);

	    List<Message> foundMessage = messageRepository.findAll();
	    model.addAttribute("messages", foundMessage);
	    System.out.println("Test");
	    return "messages";
	  }*/
	}

