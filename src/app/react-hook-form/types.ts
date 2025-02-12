interface TaskRules {
  budget_from: number | string;
  budget_to: number | string;
  deadline_days: number;
  qty_freelancers: number;
}

export interface TaskRequestParams {
  title: string;
  description: string;
  tags: string[];
  budget_from: number | string;
  budget_to: number | string;
  deadline: number;
  reminds: number;
  all_auto_responses: boolean;
  token: string;
  rules?: TaskRules;
}
