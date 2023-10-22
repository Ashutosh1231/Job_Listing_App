package com.Ashutosh.jobListingApp.modal;


import jakarta.persistence.*;

@Entity
@Table(name="job_portal_system")
public class JobModal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long jobId;
	
	@Column(name = "company")
	private String company;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "details")
	private String details;
	
	@Column(name = "salary")
	private int salary;
	
	
	public JobModal(long jobId, String company, String email, String details, int salary) {
		super();
		this.jobId = jobId;
		this.company = company;
		this.email = email;
		this.details = details;
		this.salary = salary;
	}

	public JobModal() {
		super();
		
	}

	public long getJobId() {
		return jobId;
	}

	public void setJobId(long jobId) {
		this.jobId = jobId;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

}
