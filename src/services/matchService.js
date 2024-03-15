import { FetchService } from "./fetchService";

export class MatchService {
	// possible to add another method here depending on return object
	static getMatchesByCompetitionIdAndYear(tournamentId, year = 0, upcoming = "all", past = "all", includeCurrent = true, substitutions = false, cards = false, penaltyShots = false) {
		return FetchService.get(`/api/match?year=${year}&tournamentId=${tournamentId}&upcoming=${upcoming}&past=${past}&includeCurrent=${includeCurrent}&substitutions=${substitutions}&cards=${cards}&penaltyShots=${penaltyShots}`);
	}
}