package com.local.api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.local.api.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
