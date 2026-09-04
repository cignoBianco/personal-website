import type {
    ChangeEvent,
} from "react";

import type {
    ProjectFiltersState,
} from "./types";

interface ProjectFiltersProps {
    value: ProjectFiltersState;
    tags: string[];
    technologies: string[];
    onChange: (
        filters: ProjectFiltersState,
    ) => void;
}

export function ProjectFilters({
    value,
    tags,
    technologies,
    onChange,
}: ProjectFiltersProps) {
    function handleTagChange(
        event: ChangeEvent<HTMLSelectElement>
    ) {
        onChange({
            ...value,
            tag:
                event.target.value ||
                null,
        });
    }

    function handleTechnologyChange(
        event: ChangeEvent<HTMLSelectElement>
    ) {
        onChange({
            ...value,
            technology:
                event.target.value ||
                null,
        });
    }

    function handleFeaturedChange(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        onChange({
            ...value,
            featured:
                event.target.checked,
        });
    }

    function handleReset() {
        onChange({
            tag: null,
            technology: null,
            featured: false,
        });
    }

    return (
        <div>
            <label>
                <span>Tag</span>

                <select
                    value={value.tag ?? ""}
                    onChange={handleTagChange}
                >
                    <option value="">
                        All
                    </option>

                    {tags.map((tag) => (
                        <option
                            key={tag}
                            value={tag}
                        >
                            {tag}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                <span>
                    Technology
                </span>

                <select
                    value={
                        value.technology ??
                        ""
                    }
                    onChange={
                        handleTechnologyChange
                    }
                >
                    <option value="">
                        All
                    </option>

                    {technologies.map(
                        (technology) => (
                            <option
                                key={
                                    technology
                                }
                                value={
                                    technology
                                }
                            >
                                {technology}
                            </option>
                        ),
                    )}
                </select>
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={
                        value.featured
                    }
                    onChange={
                        handleFeaturedChange
                    }
                />

                <span>
                    Featured only
                </span>
            </label>

            <button
                type="button"
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    );
}