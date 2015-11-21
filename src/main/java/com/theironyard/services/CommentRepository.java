package com.theironyard.services;

import com.theironyard.entities.Comments;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by DrScott on 11/21/15.
 */
public interface CommentRepository extends CrudRepository<Comments, Integer>{
}
