import React, { useState } from 'react';
import { useContentCreation } from '../../hooks/useContentCreation';
import ContentTypeSelector from './ContentTypeSelector';
import ContentInput from './ContentInput';
import SubmitButton from './SubmitButton';

export default function ContentCreator() {
  const [contentType, setContentType] = useState<'post' | 'question' | 'review'>('post');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const { createContent, isSubmitting } = useContentCreation();

  const handleSubmit = async () => {
    if (!content.trim()) return;
    
    await createContent({
      type: contentType,
      content,
      rating: contentType === 'review' ? rating : undefined
    });
    
    setContent('');
    setRating(5);
    setContentType('post');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="space-y-4">
        <ContentTypeSelector
          selectedType={contentType}
          onTypeSelect={setContentType}
        />
        
        <ContentInput
          type={contentType}
          content={content}
          rating={rating}
          isSubmitting={isSubmitting}
          onContentChange={setContent}
          onRatingChange={contentType === 'review' ? setRating : undefined}
        />
        
        <div className="flex justify-end">
          <SubmitButton
            isSubmitting={isSubmitting}
            isValid={content.trim().length > 0}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}