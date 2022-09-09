package com.local.api.backend.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.local.api.backend.dto.UserDTO;
import com.local.api.backend.entity.User;
import com.local.api.backend.repository.UserRepository;

@RestController
@RequestMapping("users")
public class UserController {
	private final ModelMapper modelMapper = new ModelMapper();
	@Autowired
	private UserRepository repository;

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping()
	List<User> getAllUser() {
		return repository.findAll();
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/{id}")
	User getUserById(@PathVariable Long id) {
		return repository.findById(id).get();
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping()
	User postUser(@RequestBody @Validated UserDTO userDTO) {
		User user = modelMapper.map(userDTO, User.class);
		repository.save(user);
		return user;
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/{id}")
	User putUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
		User user = repository.findById(id).get();
		modelMapper.map(userDTO, user);
		repository.save(user);
		return user;
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PatchMapping("/{id}")
	User patchUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
		User user = repository.findById(id).get();
		modelMapper.map(userDTO, user);
		repository.save(user);
		return user;
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@DeleteMapping("/{id}")
	void deleteUser(@PathVariable Long id) {
		User user = repository.findById(id).get();
		repository.delete(user);
	}
}
