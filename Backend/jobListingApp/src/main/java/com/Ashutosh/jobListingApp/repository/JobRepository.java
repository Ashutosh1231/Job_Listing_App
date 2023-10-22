package com.Ashutosh.jobListingApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Ashutosh.jobListingApp.modal.JobModal;

@Repository
public interface JobRepository extends JpaRepository<JobModal, Long>{

}
