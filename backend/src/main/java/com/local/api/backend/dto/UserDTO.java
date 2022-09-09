package com.local.api.backend.dto;

import lombok.Data;
import javax.validation.constraints.NotNull;

@Data
public class UserDTO {
	@NotNull
	private String name;

	@NotNull
	private String email;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public UserDTO(String name, String email) {
		super();
		this.name = name;
		this.email = email;
	}
}
