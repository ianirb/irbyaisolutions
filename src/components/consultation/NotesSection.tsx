import React from 'react';

interface NotesSectionProps {
  notes: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function NotesSection({ notes, onChange }: NotesSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Additional Notes</h3>
      <textarea
        name="notes"
        value={notes}
        onChange={onChange}
        className="w-full h-32 px-4 py-2 bg-gray-900/50 border border-purple-500/20 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white resize-none"
        placeholder="Tell us more about your specific needs, timeline, or any questions you have..."
      />
    </div>
  );
}