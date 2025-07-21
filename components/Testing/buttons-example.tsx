'use client';

import React from 'react';
import { ActionButton, SecondaryButton, CloseButton } from '../index';

// Example component showing how to use the three button types
export const ButtonsExample: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Button Components</h2>
      
      {/* ActionButton Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">ActionButton</h3>
        <div className="flex flex-wrap gap-4">
          <ActionButton variant="primary" size="sm">
            Small Primary
          </ActionButton>
          <ActionButton variant="primary" size="md">
            Medium Primary
          </ActionButton>
          <ActionButton variant="primary" size="lg">
            Large Primary
          </ActionButton>
          <ActionButton variant="secondary" size="md">
            Secondary
          </ActionButton>
          <ActionButton variant="primary" size="md" isLoading>
            Loading
          </ActionButton>
          <ActionButton variant="primary" size="md" fullWidth>
            Full Width
          </ActionButton>
        </div>
      </div>

      {/* SecondaryButton Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">SecondaryButton</h3>
        <div className="flex flex-wrap gap-4">
          <SecondaryButton variant="outline" size="sm">
            Small Outline
          </SecondaryButton>
          <SecondaryButton variant="outline" size="md">
            Medium Outline
          </SecondaryButton>
          <SecondaryButton variant="outline" size="lg">
            Large Outline
          </SecondaryButton>
          <SecondaryButton variant="ghost" size="md">
            Ghost Button
          </SecondaryButton>
          <SecondaryButton variant="outline" size="md" fullWidth>
            Full Width Outline
          </SecondaryButton>
        </div>
      </div>

      {/* CloseButton Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">CloseButton</h3>
        <div className="flex items-center gap-4">
          <CloseButton size="sm" />
          <CloseButton size="md" />
          <CloseButton size="lg" />
          <CloseButton size="md" variant="minimal" />
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Common Usage</h3>
        <div className="flex flex-wrap gap-4">
          <ActionButton 
            variant="primary" 
            size="lg" 
            onClick={() => alert('Get Started clicked!')}
          >
            Get Started
          </ActionButton>
          <SecondaryButton 
            variant="outline" 
            size="lg"
            onClick={() => alert('Learn More clicked!')}
          >
            Learn More
          </SecondaryButton>
          <div className="relative inline-block">
            <div className="bg-gray-100 p-4 rounded">
              Modal Content
              <CloseButton 
                size="sm" 
                className="absolute top-2 right-2"
                onClick={() => alert('Close clicked!')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 