package com.Ashutosh.jobListingApp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Ashutosh.jobListingApp.exception.ResourceNotFoundException;
import com.Ashutosh.jobListingApp.modal.JobModal;
import com.Ashutosh.jobListingApp.repository.JobRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class JobPortalController {
	
	@Autowired
	private JobRepository jobRepository;
	
	//get all jobs
	@GetMapping("/job")
	public List<JobModal> getAllJob(){
		return jobRepository.findAll();
	}
	
	//create job
	@PostMapping("/job")
	public JobModal createEmployee(@RequestBody JobModal jobModal ){
		return jobRepository.save(jobModal);
	}
	
	//get job by id
	@GetMapping("/job/{jobId}")
	public ResponseEntity<JobModal> getJobById(@PathVariable Long jobId){
		JobModal jobModal = jobRepository.findById(jobId).orElseThrow(() -> new ResourceNotFoundException("Job not exist with id :"+jobId));
		return ResponseEntity.ok(jobModal);
	}
	
	@DeleteMapping("/job/{jobId}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long jobId){
		
		JobModal jobModal = jobRepository.findById(jobId).orElseThrow(() -> new ResourceNotFoundException("Job not exist with id :"+jobId));
		
		jobRepository.delete(jobModal);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
