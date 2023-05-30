"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESI = void 0;
const FetchHttpRequest_1 = require("./core/FetchHttpRequest");
const AllianceService_1 = require("./services/AllianceService");
const AssetsService_1 = require("./services/AssetsService");
const BookmarksService_1 = require("./services/BookmarksService");
const CalendarService_1 = require("./services/CalendarService");
const CharacterService_1 = require("./services/CharacterService");
const ClonesService_1 = require("./services/ClonesService");
const ContactsService_1 = require("./services/ContactsService");
const ContractsService_1 = require("./services/ContractsService");
const CorporationService_1 = require("./services/CorporationService");
const DogmaService_1 = require("./services/DogmaService");
const FactionWarfareService_1 = require("./services/FactionWarfareService");
const FittingsService_1 = require("./services/FittingsService");
const FleetsService_1 = require("./services/FleetsService");
const IncursionsService_1 = require("./services/IncursionsService");
const IndustryService_1 = require("./services/IndustryService");
const InsuranceService_1 = require("./services/InsuranceService");
const KillmailsService_1 = require("./services/KillmailsService");
const LocationService_1 = require("./services/LocationService");
const LoyaltyService_1 = require("./services/LoyaltyService");
const MailService_1 = require("./services/MailService");
const MarketService_1 = require("./services/MarketService");
const OpportunitiesService_1 = require("./services/OpportunitiesService");
const PlanetaryInteractionService_1 = require("./services/PlanetaryInteractionService");
const RoutesService_1 = require("./services/RoutesService");
const SearchService_1 = require("./services/SearchService");
const SkillsService_1 = require("./services/SkillsService");
const SovereigntyService_1 = require("./services/SovereigntyService");
const StatusService_1 = require("./services/StatusService");
const UniverseService_1 = require("./services/UniverseService");
const UserInterfaceService_1 = require("./services/UserInterfaceService");
const WalletService_1 = require("./services/WalletService");
const WarsService_1 = require("./services/WarsService");
class ESI {
    constructor(config, HttpRequest = FetchHttpRequest_1.FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://esi.evetech.net/latest',
            VERSION: config?.VERSION ?? '1.17',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.alliance = new AllianceService_1.AllianceService(this.request);
        this.assets = new AssetsService_1.AssetsService(this.request);
        this.bookmarks = new BookmarksService_1.BookmarksService(this.request);
        this.calendar = new CalendarService_1.CalendarService(this.request);
        this.character = new CharacterService_1.CharacterService(this.request);
        this.clones = new ClonesService_1.ClonesService(this.request);
        this.contacts = new ContactsService_1.ContactsService(this.request);
        this.contracts = new ContractsService_1.ContractsService(this.request);
        this.corporation = new CorporationService_1.CorporationService(this.request);
        this.dogma = new DogmaService_1.DogmaService(this.request);
        this.factionWarfare = new FactionWarfareService_1.FactionWarfareService(this.request);
        this.fittings = new FittingsService_1.FittingsService(this.request);
        this.fleets = new FleetsService_1.FleetsService(this.request);
        this.incursions = new IncursionsService_1.IncursionsService(this.request);
        this.industry = new IndustryService_1.IndustryService(this.request);
        this.insurance = new InsuranceService_1.InsuranceService(this.request);
        this.killmails = new KillmailsService_1.KillmailsService(this.request);
        this.location = new LocationService_1.LocationService(this.request);
        this.loyalty = new LoyaltyService_1.LoyaltyService(this.request);
        this.mail = new MailService_1.MailService(this.request);
        this.market = new MarketService_1.MarketService(this.request);
        this.opportunities = new OpportunitiesService_1.OpportunitiesService(this.request);
        this.planetaryInteraction = new PlanetaryInteractionService_1.PlanetaryInteractionService(this.request);
        this.routes = new RoutesService_1.RoutesService(this.request);
        this.search = new SearchService_1.SearchService(this.request);
        this.skills = new SkillsService_1.SkillsService(this.request);
        this.sovereignty = new SovereigntyService_1.SovereigntyService(this.request);
        this.status = new StatusService_1.StatusService(this.request);
        this.universe = new UniverseService_1.UniverseService(this.request);
        this.userInterface = new UserInterfaceService_1.UserInterfaceService(this.request);
        this.wallet = new WalletService_1.WalletService(this.request);
        this.wars = new WarsService_1.WarsService(this.request);
    }
}
exports.ESI = ESI;
//# sourceMappingURL=ESI.js.map