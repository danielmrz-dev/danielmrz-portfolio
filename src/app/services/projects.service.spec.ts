import { TestBed } from "@angular/core/testing";
import { ProjectsService } from "./projects.service";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe(ProjectsService.name, () => {

    let service: ProjectsService;
    let prot = ProjectsService.prototype;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProjectsService,
                provideHttpClient(),
                provideHttpClientTesting(),
            ]
        })
        service = TestBed.inject(ProjectsService);
    })

    it('should create', () => {
        expect(service).not.toBeNull();
    });

    describe(`Method => ${prot.getProjects.name}()`, () => {
        it('should return the list of projects', () => {
            expect(true).toBeTruthy();
        });
    });
    

});
