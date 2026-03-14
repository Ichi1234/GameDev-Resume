type CoreSkills = {
    id: number,
    owner_id: number,
    skill: string,
    description: string,
}


export type OwnerProfile = {
    id: number,
    user_id: number,
    role_id: number,
    portfolio_title: string,
    main_quote: React.ReactNode,
    sub_quote: React.ReactNode,
    introduction: React.ReactNode,
    github_link: string,
    current_focus: string[],
    core_skills: CoreSkills[]
}
