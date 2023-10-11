package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dto.FeedbackRequest;
import com.example.demo.dto.FeedbackResponse;
import com.example.demo.entity.Feedback;
import com.example.demo.repository.FeedbackRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FeedbackService{
	@Autowired
	private final FeedbackRepository feedbackRepository;
	
	public boolean addFeedback(FeedbackRequest feedbackRequest)
     {
	    Feedback feedback=Feedback.builder().name(feedbackRequest.getName()).email(feedbackRequest.getEmail()).message(feedbackRequest.getMessage()).build();
		feedbackRepository.save(feedback);
		List<Feedback> feedbackData=feedbackRepository.findAll();
		if(feedbackData.isEmpty())
		{
			return false;
		}
		else {
			return true;
		}
	}
	
	public List<FeedbackResponse> getFeedback(){
		List<Feedback> feedbacks=feedbackRepository.findAll();
		return feedbacks.stream().map(feedback -> mapToFeedbackResponse(feedback)).toList();
	}
	
	private FeedbackResponse mapToFeedbackResponse(Feedback feedback) {
		return FeedbackResponse.builder().name(feedback.getName()).email(feedback.getEmail()).message(feedback.getMessage()).build();
	}
}

