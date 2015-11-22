package com.theironyard.services;

import com.theironyard.entities.Comment;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by DrScott on 11/22/15.
 */
public interface CommentRepository extends CrudRepository<Comment, Integer>{
}
