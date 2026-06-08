-- Persist which test attempt (variant) the saved answers belong to. Answers are
-- keyed by question number, but which questions a number maps to — and, for
-- hardened exams, the choice order — depends on the active variant, which is
-- derived from this attempt count. Syncing it keeps cross-device restores from
-- grading answers against a different variant's questions.
ALTER TABLE exam_progress ADD COLUMN attempt_count INTEGER NOT NULL DEFAULT 0;
